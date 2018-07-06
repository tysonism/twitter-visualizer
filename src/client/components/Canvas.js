import React, { Component } from 'react';

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.images = React.createRef();
    this.drawCanvas = this.drawCanvas.bind(this);
  }

  drawCanvas(canvas, images) {
    const canvasContent = this.processImages(images);
    canvas.height = canvasContent.canvasHeight;
    canvas.width = canvasContent.canvasWidth;
    const ctx = canvas.getContext('2d');
    canvasContent.objectsToDraw.forEach((imageObj) => {
      const {
        imageElem, x, y, width, height, widthCrop, heightCrop,
      } = imageObj;
      const xCrop = widthCrop / 2;
      const yCrop = heightCrop / 2;
      ctx.drawImage(
        imageElem,
        xCrop,
        yCrop,
        imageElem.width - widthCrop,
        imageElem.height - heightCrop,
        x,
        y,
        width,
        height,
      );
      console.log(imageObj);
    });

    const encodedImage = canvas.toDataURL();
    const localDataStorage = {
      width: canvasContent.canvasWidth,
      height: canvasContent.canvasHeight,
      url: encodedImage,
    };
    window.localStorage.setItem(this.props.query, JSON.stringify(localDataStorage));
  }

  processImages(images) {
    const objectsToDraw = [];
    let currentY = 0;
    let currentX = 0;
    const maxCanvasWidth = this.props.dimensions.width;
    const maxCanvasHeight = this.props.dimensions.height;
    const maxImageWidth = Math.floor(maxCanvasWidth / this.props.dimensions.columns);
    const maxImageHeight = Math.floor(maxCanvasHeight / this.props.dimensions.rows);
    let canvasHeight;
    images.forEach((imageElem) => {
      let targetHeight = imageElem.height;
      let targetWidth = imageElem.width;
      let widthCrop = 0;
      let heightCrop = 0;
      let scale = 1;
      //resizing if too small
      if (targetHeight < maxImageHeight || targetWidth < maxImageWidth) {
          targetWidth = maxImageWidth;
          targetHeight *= scale;
          heightCrop = targetHeight - maxImageHeight;
        // }
              // resizing if too large
      } else if (targetHeight > maxImageHeight || targetWidth > maxImageWidth) {
          scale = maxImageWidth / targetWidth;
          targetWidth = maxImageWidth;
          targetHeight *= scale;
      }

      // determine proper placement
      let newX = currentX;
      let newY = currentY;
      if (canvasHeight === undefined) canvasHeight = maxImageHeight;
      if (currentX + (maxImageWidth / 3) > maxCanvasWidth) {
        if (canvasHeight > maxCanvasHeight) {
          return;
        }
        currentX = 0;
        newX = 0 + targetWidth;
        canvasHeight += maxImageHeight;
        currentY += maxImageHeight;
        newY = currentY;
      } else {
        newX = currentX + maxImageWidth;
      }

      objectsToDraw.push({
        imageElem,
        x: currentX,
        y: currentY,
        widthCrop,
        heightCrop,
        height: targetHeight,
        width: targetWidth,
      });
      currentX = newX;
      currentY = newY;
    });
    return {
      canvasWidth: maxCanvasWidth,
      canvasHeight: (canvasHeight > maxCanvasHeight) ? maxCanvasHeight : canvasHeight,
      objectsToDraw,
    };
  }

  componentDidMount() {
    if (this.props.savedCollage && this.canvas.current) {
      const ctx = this.canvas.current.getContext('2d');
      ctx.drawImage(this.props.savedCollage.url);
    }
    if (this.canvas.current && this.images.current) {
      const imgLoadPromises = Array.from(this.images.current.children).map(
        imgElem =>
          new Promise((resolve) => {
            imgElem.onload = () =>
              resolve({
                element: imgElem,
                status: 'ok',
              });
            imgElem.onerror = () =>
              resolve({
                element: imgElem,
                status: 'error',
              });
          }),
      );

      const loadAll = Promise.all(imgLoadPromises);
      let loadedImages = [];
      const context = this;
      loadAll
        .then((response) => {
          loadedImages = response
            .filter(candidate => candidate.status === 'ok')
            .map(candidate => candidate.element);
          context.drawCanvas(context.canvas.current, loadedImages);
        })
        .catch((response) => {
          console.log('error', response);
        });

      // this.images.current.onload = () => {
      //   this.drawCanvas(this.canvas.current, this.images.current);
      // };
    }
  }

  render() {
    let images;
    if (this.props.storedCollage) {
      return (
        <div>
          <canvas
            ref={this.canvas}
            width={this.props.storedCollage.width}
            height={this.props.storedCollage.height}
          />
        </div>
      );
    }
    // Checks whether image urls have been received back from Get request
    if (this.props.images !== undefined && this.props.images.length > 0) {
      // Maps over images data, creating img attributes for each
      images = this.props.images
        .slice(0, this.props.dimensions.rows * this.props.dimensions.columns)
        .map(image => <img key={image.contentUrl} src={image.contentUrl} />);

      return (
        <div>
          <canvas ref={this.canvas} width={1000} height={2000} />
          <div
            ref={this.images}
            style={{
              display: 'none',
            }}
          >
            {images}
          </div>
        </div>
      );
    }
    return null;
  }
}

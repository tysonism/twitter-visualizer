import React, { Component } from 'react';
import axios from 'axios';
import Canvas from './Canvas';

class Collage extends Component {
  constructor(props) {
    super(props);
    this.url = `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${props.query}`;
    this.state = {
      imageData: [],
      storedCollage: null,
    };
  }

  componentDidMount() {
    // Uses stored collage if available then exits method
    if (window.localStorage.collage) {
      const data = JSON.parse(window.localStorage);
      if (data[this.props.query]) {
        this.setState({
          storedCollage: data[this.props.query],
        });
        return;
      }
    }
    // Axios GET request for search query
    axios({
      method: 'get',
      url: this.url,
      headers: {
        'Ocp-Apim-Subscription-Key': 'c24662dcb15b4e9391b74fdf5279e2bb',
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          imageData: response.data.value,
        });
      })
      .catch((response) => {
        console.log('error :', response);
      });
    // this.setState({
    //   imageData: savedSearch.value,
    // });
  }

  render() {
    return (
      <div className="Collage">
        {this.state.imageData.length || this.state.storedCollage > 0 ? (
          <Canvas images={this.state.imageData} storedCollage={this.storedCollage} query={this.props.query} />
        ) : null}
      </div>
    );
  }
}

export default Collage;

const savedSearch = {
  _type: 'Images',
  instrumentation: {
    _type: 'ResponseInstrumentation',
  },
  readLink: 'https://api.cognitive.microsoft.com/api/v7/images/search?q=dracula',
  webSearchUrl: 'https://www.bing.com/images/search?q=dracula&FORM=OIIARP',
  totalEstimatedMatches: 834,
  nextOffset: 41,
  value: [
    {
      webSearchUrl:
        'https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=dracula&id=4865751789B5476791D70A24025A3B6E08942651&simid=608055929969116667',
      name: "Hammer's Dracula Cycle: A Critical Look - ComingSoon.net",
      thumbnailUrl: 'https://tse2.mm.bing.net/th?id=OIP.p8vX4xEpVhnJzpoOVnVY8QHaEP&pid=Api',
      datePublished: '2018-06-07T22:43:00.0000000Z',
      contentUrl:
        'http://cdn1-www.comingsoon.net/assets/styd/assets/uploads/2016/06/HamDracLee.jpg',
      hostPageUrl:
        'http://www.comingsoon.net/horror/news/749677-hammers-dracula-cycle-critical-look',
      contentSize: '159422 B',
      encodingFormat: 'jpeg',
      hostPageDisplayUrl: 'www.comingsoon.net/horror/news/749677-hammers-dracula-cycle...',
      width: 1428,
      height: 818,
      thumbnail: {
        width: 474,
        height: 271,
      },
      imageInsightsToken:
        'ccid_p8vX4xEp*mid_4865751789B5476791D70A24025A3B6E08942651*simid_608055929969116667*thid_OIP.p8vX4xEpVhnJzpoOVnVY8QHaEP',
      insightsMetadata: {
        recipeSourcesCount: 0,
        bestRepresentativeQuery: {
          text: 'Christopher Lee Dracula Movies',
          displayText: 'Christopher Lee Dracula Movies',
          webSearchUrl:
            'https://www.bing.com/images/search?q=Christopher+Lee+Dracula+Movies&id=4865751789B5476791D70A24025A3B6E08942651&FORM=IDBQDM',
        },
        pagesIncludingCount: 162,
        availableSizesCount: 61,
      },
      imageId: '4865751789B5476791D70A24025A3B6E08942651',
      accentColor: '6F7853',
    },
    {
      webSearchUrl:
        'https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=dracula&id=0A69E0CAD24456C0CCC4B1B8072096F5466DE2B4&simid=607995796164182623',
      name: "10 Blood-Curdling Facts About 'Dracula' | Mental Floss",
      thumbnailUrl: 'https://tse4.mm.bing.net/th?id=OIP.Ny7A0Xk8mdfN8o2opqTp3QHaE-&pid=Api',
      datePublished: '2017-11-14T00:03:00.0000000Z',
      contentUrl: 'http://images.mentalfloss.com/sites/default/files/dracula.png?resize=1100x740',
      hostPageUrl: 'http://mentalfloss.com/article/69823/10-blood-curdling-facts-about-dracula',
      contentSize: '428104 B',
      encodingFormat: 'png',
      hostPageDisplayUrl: 'mentalfloss.com/article/69823/10-blood-curdling-facts-about-dracula',
      width: 1100,
      height: 739,
      thumbnail: {
        width: 474,
        height: 318,
      },
      imageInsightsToken:
        'ccid_Ny7A0Xk8*mid_0A69E0CAD24456C0CCC4B1B8072096F5466DE2B4*simid_607995796164182623*thid_OIP.Ny7A0Xk8mdfN8o2opqTp3QHaE-',
      insightsMetadata: {
        recipeSourcesCount: 0,
        bestRepresentativeQuery: {
          text: 'Count Dracula',
          displayText: 'Count Dracula',
          webSearchUrl:
            'https://www.bing.com/images/search?q=Count+Dracula&id=0A69E0CAD24456C0CCC4B1B8072096F5466DE2B4&FORM=IDBQDM',
        },
        pagesIncludingCount: 17,
        availableSizesCount: 8,
      },
      imageId: '0A69E0CAD24456C0CCC4B1B8072096F5466DE2B4',
      accentColor: '666666',
    },
    {
      webSearchUrl:
        'https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=dracula&id=8315B266217F67EB431CF383C3D6E655D993DE8B&simid=608022854461883787',
      name: "Tod Browning's Dracula | Northrop",
      thumbnailUrl: 'https://tse3.mm.bing.net/th?id=OIP.UVcH0NUJeS-ejSiUwV5dWQHaFW&pid=Api',
      datePublished: '2016-09-21T17:29:00.0000000Z',
      contentUrl:
        'http://www.northrop.umn.edu/sites/default/files/public/styles/internal_banner/public/images/events/web_header_dracula.jpg?itok=e3YuVayS',
      hostPageUrl: 'http://www.northrop.umn.edu/events/tod-brownings-dracula',
      contentSize: '147036 B',
      encodingFormat: 'jpeg',
      hostPageDisplayUrl: 'www.northrop.umn.edu/events/tod-brownings-dracula',
      width: 1800,
      height: 1302,
      thumbnail: {
        width: 474,
        height: 342,
      },
      imageInsightsToken:
        'ccid_UVcH0NUJ*mid_8315B266217F67EB431CF383C3D6E655D993DE8B*simid_608022854461883787*thid_OIP.UVcH0NUJeS-ejSiUwV5dWQHaFW',
      insightsMetadata: {
        recipeSourcesCount: 0,
        bestRepresentativeQuery: {
          text: 'Character Count Dracula Novel',
          displayText: 'Character Count Dracula Novel',
          webSearchUrl:
            'https://www.bing.com/images/search?q=Character+Count+Dracula+Novel&id=8315B266217F67EB431CF383C3D6E655D993DE8B&FORM=IDBQDM',
        },
        pagesIncludingCount: 7,
        availableSizesCount: 2,
      },
      imageId: '8315B266217F67EB431CF383C3D6E655D993DE8B',
      accentColor: '666666',
    },
    {
      webSearchUrl:
        'https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=dracula&id=B510750C3E00A53041597C97BF57EB64453B33A2&simid=608002668102157229',
      name: 'COUNT DRACULA',
      thumbnailUrl: 'https://tse3.mm.bing.net/th?id=OIP.7Su-TXnMJj5topMaW9_mZwHaHa&pid=Api',
      datePublished: '2016-09-10T10:18:00.0000000Z',
      contentUrl:
        'http://starace.com.hk/image/magictoolbox_cache/640ca855e591fa5c6759d336b1ca786b/5/2/521/original/1342570570/Featured%20-%20Dracula.jpg',
      hostPageUrl: 'http://starace.com.hk/index.php?route=product/product&product_id=521',
      contentSize: '522086 B',
      encodingFormat: 'jpeg',
      hostPageDisplayUrl: 'starace.com.hk/index.php?route=product/product&product_id=521',
      width: 980,
      height: 980,
      thumbnail: {
        width: 474,
        height: 474,
      },
      imageInsightsToken:
        'ccid_7Su+TXnM*mid_B510750C3E00A53041597C97BF57EB64453B33A2*simid_608002668102157229*thid_OIP.7Su-TXnMJj5topMaW9!_mZwHaHa',
      insightsMetadata: {
        recipeSourcesCount: 0,
        bestRepresentativeQuery: {
          text: 'Count Dracula Christopher Lee',
          displayText: 'Count Dracula Christopher Lee',
          webSearchUrl:
            'https://www.bing.com/images/search?q=Count+Dracula+Christopher+Lee&id=B510750C3E00A53041597C97BF57EB64453B33A2&FORM=IDBQDM',
        },
        pagesIncludingCount: 9,
        availableSizesCount: 2,
      },
      imageId: 'B510750C3E00A53041597C97BF57EB64453B33A2',
      accentColor: '49626A',
    },
    {
      webSearchUrl:
        'https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=dracula&id=56EE02F1FA650923476BC39D5932C13A176B861C&simid=608032999161857739',
      name: 'Frightening Fables: A Spotlight on Count Dracula',
      thumbnailUrl: 'https://tse1.mm.bing.net/th?id=OIP.dhWVDT3BWUTIhzxSA4Ro0wHaFj&pid=Api',
      datePublished: '2016-07-05T12:00:00.0000000Z',
      contentUrl: 'http://news.entertainmentearth.com/wp-content/uploads/2016/07/Dracula-1.jpg',
      hostPageUrl:
        'http://news.entertainmentearth.com/2016/07/05/frightening-fables-a-spotlight-on-count-dracula/',
      contentSize: '266977 B',
      encodingFormat: 'jpeg',
      hostPageDisplayUrl: 'news.entertainmentearth.com/2016/07/05/frightening-fables-a...',
      width: 1600,
      height: 1200,
      thumbnail: {
        width: 474,
        height: 355,
      },
      imageInsightsToken:
        'ccid_dhWVDT3B*mid_56EE02F1FA650923476BC39D5932C13A176B861C*simid_608032999161857739*thid_OIP.dhWVDT3BWUTIhzxSA4Ro0wHaFj',
      insightsMetadata: {
        recipeSourcesCount: 0,
        bestRepresentativeQuery: {
          text: 'Bela Lugosi as Dracula',
          displayText: 'Bela Lugosi as Dracula',
          webSearchUrl:
            'https://www.bing.com/images/search?q=Bela+Lugosi+as+Dracula&id=56EE02F1FA650923476BC39D5932C13A176B861C&FORM=IDBQDM',
        },
        pagesIncludingCount: 110,
        availableSizesCount: 60,
      },
      imageId: '56EE02F1FA650923476BC39D5932C13A176B861C',
      accentColor: '666666',
    },
    {
      webSearchUrl:
        'https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=dracula&id=50F6C2C4A9456834F65CEAD6CC7AD78FEFCC492E&simid=608046597008723515',
      name: 'The Scars of Dracula Count Dracula Sixth Scale Figure by ...',
      thumbnailUrl: 'https://tse2.mm.bing.net/th?id=OIP.PvqCnqbc8bvMDAoOeIyZowHaE8&pid=Api',
      datePublished: '2018-06-11T23:57:00.0000000Z',
      contentUrl:
        'https://www.sideshowtoy.com/assets/products/902855-count-dracula/lg/the-scars-of%20dracula-count-dracula-sixth-scale-star-ace-902855-07.jpg',
      hostPageUrl:
        'https://www.sideshowtoy.com/collectibles/the-scars-of-dracula-count-dracula-star-ace-toys-ltd-902855/',
      contentSize: '452506 B',
      encodingFormat: 'jpeg',
      hostPageDisplayUrl: 'https://www.sideshowtoy.com/collectibles/the-scars-of-dracula-count...',
      width: 1500,
      height: 1000,
      thumbnail: {
        width: 474,
        height: 316,
      },
      imageInsightsToken:
        'ccid_PvqCnqbc*mid_50F6C2C4A9456834F65CEAD6CC7AD78FEFCC492E*simid_608046597008723515*thid_OIP.PvqCnqbc8bvMDAoOeIyZowHaE8',
      insightsMetadata: {
        recipeSourcesCount: 0,
        bestRepresentativeQuery: {
          text: 'Count Dracula Christopher Lee',
          displayText: 'Count Dracula Christopher Lee',
          webSearchUrl:
            'https://www.bing.com/images/search?q=Count+Dracula+Christopher+Lee&id=50F6C2C4A9456834F65CEAD6CC7AD78FEFCC492E&FORM=IDBQDM',
        },
        pagesIncludingCount: 14,
        availableSizesCount: 4,
      },
      imageId: '50F6C2C4A9456834F65CEAD6CC7AD78FEFCC492E',
      accentColor: '802329',
    },
    {
      webSearchUrl:
        'https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=dracula&id=302B432F1946A70973668D6EE2CC5FD2D791B112&simid=608043109530931021',
      name: 'vampires on Pinterest | Dracula, Vampire Art and Vampire ...',
      thumbnailUrl: 'https://tse4.mm.bing.net/th?id=OIP.RiGuN5I9WBCLMHOpMxlxlAHaLH&pid=Api',
      datePublished: '2015-07-23T03:48:00.0000000Z',
      contentUrl:
        'http://cdn.collider.com/wp-content/uploads/2015/09/dracula-poster-mondo-jonathan-burton-variant.jpg',
      hostPageUrl: 'https://www.pinterest.com/stctorres/vampires/',
      contentSize: '791891 B',
      encodingFormat: 'jpeg',
      hostPageDisplayUrl: 'https://www.pinterest.com/stctorres/vampires',
      width: 933,
      height: 1400,
      thumbnail: {
        width: 474,
        height: 711,
      },
      imageInsightsToken:
        'ccid_RiGuN5I9*mid_302B432F1946A70973668D6EE2CC5FD2D791B112*simid_608043109530931021*thid_OIP.RiGuN5I9WBCLMHOpMxlxlAHaLH',
      insightsMetadata: {
        recipeSourcesCount: 0,
        bestRepresentativeQuery: {
          text: '34 X 36 Dracula Movie Poster',
          displayText: '34 X 36 Dracula Movie Poster',
          webSearchUrl:
            'https://www.bing.com/images/search?q=34+X+36+Dracula+Movie+Poster&id=302B432F1946A70973668D6EE2CC5FD2D791B112&FORM=IDBQDM',
        },
        pagesIncludingCount: 22,
        availableSizesCount: 8,
      },
      imageId: '302B432F1946A70973668D6EE2CC5FD2D791B112',
      accentColor: '1F1110',
    },
    {
      webSearchUrl:
        'https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=dracula&id=9878A2F7D1E26E42AA3F3A9A815909DE48F08BFD&simid=608025053479110801',
      name: "'Powers of Darkness' offers an Icelander's take on ...",
      thumbnailUrl: 'https://tse1.mm.bing.net/th?id=OIP.8C1Vy7_XImqX0hZ-eXKBkgHaFd&pid=Api',
      datePublished: '2017-02-08T17:58:00.0000000Z',
      contentUrl:
        'http://www.trbimg.com/img-589b5971/turbine/ct-powers-of-darkness-dracula-bram-stoker-asmundsson-books-0212-20170208',
      hostPageUrl:
        'http://www.chicagotribune.com/lifestyles/books/ct-powers-of-darkness-dracula-bram-stoker-asmundsson-books-0212-20170208-story.html',
      contentSize: '349152 B',
      encodingFormat: 'jpeg',
      hostPageDisplayUrl: 'www.chicagotribune.com/lifestyles/books/ct-powers-of-darkness...',
      width: 2000,
      height: 1476,
      thumbnail: {
        width: 474,
        height: 349,
      },
      imageInsightsToken:
        'ccid_8C1Vy7/X*mid_9878A2F7D1E26E42AA3F3A9A815909DE48F08BFD*simid_608025053479110801*thid_OIP.8C1Vy7!_XImqX0hZ-eXKBkgHaFd',
      insightsMetadata: {
        recipeSourcesCount: 0,
        bestRepresentativeQuery: {
          text: 'Bela Lugosi Dracula',
          displayText: 'Bela Lugosi Dracula',
          webSearchUrl:
            'https://www.bing.com/images/search?q=Bela+Lugosi+Dracula&id=9878A2F7D1E26E42AA3F3A9A815909DE48F08BFD&FORM=IDBQDM',
        },
        pagesIncludingCount: 8,
        availableSizesCount: 4,
      },
      imageId: '9878A2F7D1E26E42AA3F3A9A815909DE48F08BFD',
      accentColor: '666666',
    },
  ],
};

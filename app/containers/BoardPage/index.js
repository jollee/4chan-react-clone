/*
 * BoardPage
 *
 * List all the boards
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import H2 from 'components/H2';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class BoardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const japaneseAnimeMangaBoardTag = "thread/" + <FormattedMessage {...messages.japaneseAnimeMangaBoard.tag[0]} />.props[0];
    const japaneseAnimeCuteBoardTag = "thread/" + <FormattedMessage {...messages.japaneseAnimeCuteBoard.tag[0]} />.props[0];
    const japaneseAnimeWallpapersBoardTag = "thread/" + <FormattedMessage {...messages.japaneseAnimeWallpapersBoard.tag[0]} />.props[0];
    const japaneseMechaBoardTag = "thread/" + <FormattedMessage {...messages.japaneseMechaBoard.tag[0]} />.props[0];
    const japaneseCosplayBoardTag = "thread/" + <FormattedMessage {...messages.japaneseCosplayBoard.tag[0]} />.props[0];
    const japaneseCuteMaleBoardTag = "thread/" + <FormattedMessage {...messages.japaneseCuteMaleBoard.tag[0]} />.props[0];
    const japaneseFlashBoardTag = "thread/" + <FormattedMessage {...messages.japaneseFlashBoard.tag[0]} />.props[0];
    const japaneseTransportationBoardTag = "thread/" + <FormattedMessage {...messages.japaneseTransportationBoard.tag[0]} />.props[0];
    var japaneseOtakuCultureBoardTag = <FormattedMessage {...messages.japaneseOtakuCultureBoard.tag} />;
    japaneseOtakuCultureBoardTag = "thread/" + japaneseOtakuCultureBoardTag.props[0] + japaneseOtakuCultureBoardTag.props[1];

    // TODO: fix tags
    const videogamesBoardMainTag = "thread/" + <FormattedMessage {...messages.videogamesBoardMain.tag[0]} />.props[0];
    var videogamesGeneralsBoardTag = <FormattedMessage {...messages.videogamesGeneralsBoard.tag[0]} />;
    videogamesGeneralsBoardTag = "thread/" + videogamesGeneralsBoardTag.props[0] + videogamesGeneralsBoardTag.props[1];
    var videogamesPokemonBoardTag = <FormattedMessage {...messages.videogamesPokemonBoard.tag[0]} />;
    videogamesPokemonBoardTag = "thread/" + videogamesPokemonBoardTag.props[0] + videogamesPokemonBoardTag.props[1];
    var videogamesRetroGamesTag = <FormattedMessage {...messages.videogamesRetroGames.tag[0]} />;
    videogamesRetroGamesTag = "thread/" + videogamesRetroGamesTag.props[0] + videogamesRetroGamesTag.props[1];

    const creativeOekakiBoardTag = "thread/" + <FormattedMessage {...messages.creativeOekakiBoard.tag[0]} />.props[0];
    const creativePapercraftOrigamiBoard = "thread/" + <FormattedMessage {...messages.creativePapercraftOrigamiBoard.defaultMessage} />.props[0];
    
    
    

    return (
      <div>
        <Helmet
          title="Board Page"
          meta={[
            { name: 'description', content: 'Board page of React.js Boilerplate application' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <H2>
          <FormattedMessage {...messages.japaneseBoard} />
        </H2>

        <List>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseAnimeMangaBoardTag}><FormattedMessage {...messages.japaneseAnimeMangaBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseAnimeCuteBoardTag}><FormattedMessage {...messages.japaneseAnimeCuteBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseAnimeWallpapersBoardTag}><FormattedMessage {...messages.japaneseAnimeWallpapersBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseMechaBoardTag}><FormattedMessage {...messages.japaneseMechaBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseTransportationBoardTag}><FormattedMessage {...messages.japaneseTransportationBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseOtakuCultureBoardTag}><FormattedMessage {...messages.japaneseOtakuCultureBoard} /></a>
            </ListItemTitle>
          </ListItem>
        </List>

        <H2>
          <FormattedMessage {...messages.videogamesBoard} />
        </H2>


        // TODO: fix style
        <List>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.videogamesBoardMain} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesGeneralsBoardTag}><FormattedMessage {...messages.videogamesGeneralsBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesPokemonBoardTag}><FormattedMessage {...messages.videogamesPokemonBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesRetroGamesTag}><FormattedMessage {...messages.videogamesRetroGames} /></a>
            </ListItemTitle>
          </ListItem>
        </List>

        <H2>
          <FormattedMessage {...messages.interestsBoard} />
        </H2>

        <List>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsComicsCartoonsBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsTechnologyBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsTelevisionBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsWeaponsBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsAutoBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsAnimalsNatureBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsTraditionalGamesBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsSportsBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsAlternativeSportsBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsScienceMathBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsHistoryHumanitiesBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsInternationalBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsOutdoorsBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.interestsToysBoard} /></a>
            </ListItemTitle>
          </ListItem>
        </List>

        <H2>
          <FormattedMessage {...messages.creativeBoard} />
        </H2>

        <List>
          <ListItem>
            <ListItemTitle>
              <a href={creativeOekakiBoardTag}><FormattedMessage {...messages.creativeOekakiBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={creativePapercraftOrigamiBoard}><FormattedMessage {...messages.creativePapercraftOrigamiBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeFoodCookingBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeArtworkCritiqueBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeWallpapersGeneralBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeLiteratureBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeMusicBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeFashionBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creative3DCGBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeGraphicDesignBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeDoItYourselfBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeWorksafeGIFBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.creativeQuestsBoard} /></a>
            </ListItemTitle>
          </ListItem>
        </List>

        <H2>
          <FormattedMessage {...messages.otherBoard} />
        </H2>

        <List>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.otherBusinessFinanceBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.otherTravelBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.otherFitnessBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.otherParanormalBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.otherAdviceBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.otherCurrentNewsBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.otherWorksafeRequestsBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={videogamesBoardMainTag}><FormattedMessage {...messages.otherVeryImportantPostsBoard} /></a>
            </ListItemTitle>
          </ListItem>
          </List>
        </div>
    );
  }
}

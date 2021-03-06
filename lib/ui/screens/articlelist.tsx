import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactNode } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Article } from '../../generated/dognewsserverclient/models/Article';
import { extractDomain } from '../../services/extractDomain';
import { RootStackParamList } from '../Root';
// @ts-ignore
// TODO: importing images from typescript gets a bit bonkers, better way?
const logo = require('../../../assets/onlydognews-logo-main.png');

// Multiple components in this one file. TODO: refactor out when settled

// ============== generic card

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  screenMain: {
    flex: 1,
    alignContent: 'stretch',
    flexGrow: 0.9,
    flexDirection: 'column',
  },

  card: {
    flex: 1,
    flexDirection: 'row',
    minWidth: 25,
    minHeight: 200,
    // backgroundColor: 'red',
    marginTop: 3,
    marginBottom: 3,
    marginStart: 3,
    marginEnd: 3,
  },
});

export const Card = (props: { children?: ReactNode }) => {
  return <View style={styles.card}>{props.children}</View>;
};

// =========== 'article card'

export const ArticleCard = ({ article }: { article: Article }) => {
  // we may have specific stack navigation props later on, not now
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goToArticle = () => {
    navigation.push('ArticleDetail', {
      article: article,
    });
  };
  return (
    <Card>
      <View style={articleCardStyles.imageContainer}>
        <Image
          source={{ uri: article.thumbnail }}
          style={articleCardStyles.image}
          loadingIndicatorSource={logo}
        />
        <Text style={articleCardStyles.domain}>
          {article.target_url ? extractDomain(article.target_url) : ''}
        </Text>
      </View>
      <View style={articleCardStyles.contents}>
        <TouchableWithoutFeedback onPress={goToArticle}>
          <Text style={articleCardStyles.title}>{article.title}</Text>
          <Text style={articleCardStyles.text}>{article.description}</Text>

          <View style={articleCardStyles.footerContainer}>
            <Text style={articleCardStyles.avatarName}>{article.date_created}</Text>
            <View style={articleCardStyles.avatarContainer}>
              <Image
                source={{
                  uri: `https://onlydognews.com/gfx/site/${article.submitter}-logo.png`,
                }}
                style={articleCardStyles.avatarImage}
              />
            </View>
            <Text style={articleCardStyles.avatarName}>{article.submitter}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Card>
  );
};

const articleCardStyles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    // backgroundColor: 'green',
    marginTop: 4,
    marginBottom: 4,
    marginHorizontal: 8,
  },

  image: {
    flex: 1,
  },

  contents: {
    flex: 1,
    // backgroundColor: 'yellow',
  },

  title: {
    // backgroundColor: 'blue',
    color: 'black',
    padding: 2,
    fontWeight: 'bold',
    fontSize: 14,
  },

  text: {
    // backgroundColor: 'cyan',
    color: 'black',
    padding: 2,
    fontSize: 13,
  },

  domain: {
    // backgroundColor: 'cyan',
    color: 'black',
    padding: 2,
    alignSelf: 'center',
    fontSize: 10,
  },

  footerContainer: {
    flex: 1,
    // backgroundColor: 'brown',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 8,
  },

  avatarContainer: {
    flex: 1,
    // backgroundColor: 'brown',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  avatarImage: {
    width: 16,
    height: 16,
    marginHorizontal: 2,
  },

  avatarName: {
    color: 'black',
    fontSize: 10,
    alignSelf: 'center',
    marginHorizontal: 2,
  },
});

// ============= article list

export default function ArticleListScreen(): React.ReactElement {
  const articles = [];
  for (let index = 0; index < 100; index++) {
    const art: Article = {
      url: 'google.com',
      target_url:
        'https://abcnews.go.com/amp/US/toy-poodle-found-alive-hawk-snatches-owners-pennsylvania/story?id=69162940',
      status: 'visible',
      title: "Toy poodle found alive after hawk snatches it from owner's Pennsylvania backyard",
      description:
        '“A toy poodle miraculously survived a night in the bitter cold despite being being targeted by a hawk for the bird of prey’s next meal. The lucky pup also survived 10-degree weather the night it went missing.”',
      thumbnail:
        'https://onlydognews.com/gfx/posts/2020-02-26-toy-poodle-found-alive-after-hawk-snatches-it-from-owners-pennsylvania-backyard-thumb.png',
      last_updated: Date.now().toLocaleString(),
      date_created: Date.now().toLocaleString(),
      submitter: 'markus',
      moderated_submission: 'pepe',
      approver: 'osuka',
    };

    articles.push(art);
  }

  return (
    <ScrollView style={styles.screen} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.screenMain}>
        {articles.map((article, index) => (
          <ArticleCard key={`key-${index}`} article={article} />
        ))}
      </View>
    </ScrollView>
  );
}

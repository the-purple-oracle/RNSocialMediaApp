import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import styles from './style';
import globalStyles from '../../assets/styles/main';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';

const Home = ({navigation}) => {
  //all of the items in stories
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Mary',
      id: 2,
    },
    {
      firstName: 'Tim',
      id: 3,
    },
    {
      firstName: 'David',
      id: 4,
    },
    {
      firstName: 'Sammy',
      id: 5,
    },
    {
      firstName: 'Angel',
      id: 6,
    },
    {
      firstName: 'Oliver',
      id: 7,
    },
    {
      firstName: 'Adam',
      id: 8,
    },
    {
      firstName: 'Brain',
      id: 9,
    },
  ];
  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Nebraska',
      likes: 120,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'California',
      likes: 423,
      comments: 5,
      bookmarks: 32,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Georiga',
      likes: 439,
      comments: 12,
      bookmarks: 36,
      id: 3,
    },
    {
      firstName: 'Tim',
      lastName: 'Sanders',
      location: 'New York',
      likes: 136,
      comments: 54,
      bookmarks: 85,
      id: 4,
    },
    {
      firstName: 'Paul',
      lastName: 'Nelson',
      location: 'Nevada',
      likes: 231,
      comments: 64,
      bookmarks: 25,
      id: 5,
    },
  ];

  const pageSize = 4;
  const pageSizePosts = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }

    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <SafeAreaView style={globalStyles.backgroundWhite}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            <View style={styles.userStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setIsLoading(false)}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    setRenderedData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize),
                    ]);
                    setIsLoading(false);
                  }
                }}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={renderedData}
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPosts(false)}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderedDataPosts(prev => [
              ...prev,
              ...pagination(posts, postPageNumber + 1, pageSizePosts, true),
            ]);
            setIsLoadingPosts(false);
          }
        }}
        keyExtractor={item => item.id.toString() + ' post'}
        showsVerticalScrollIndicator={false}
        data={renderedDataPosts}
        renderItem={({item}) => (
          <View style={styles.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

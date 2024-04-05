import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator  } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { EventSubscriptionVendor } from 'react-native/Libraries/vendor/emitter/EventEmitter';

import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState ();
  const {data, isLoading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  })

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [data, setData] = useState([]);


  const handleCardPress = item => {

  }


  return (
    <View style={styles.container}> 
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
          <FlatList 
            data={data}
            renderItem={({item}) => (
              <PopularJobCard 
              item ={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
              
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      
      </View>
    </View>
  )
}

export default Popularjobs
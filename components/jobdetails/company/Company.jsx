import React from 'react'
import { View, Text, Image } from 'react-native'

import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

import styles from './company.style'

const Company = ({companyLogo, jobtitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
          source={{
            url: checkImageURL(companyLogo)
            ? companyLogo
            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg'
          }}
          style={styles.logoImage}
        />

      </View>
      
    </View>
  )
}

export default Company
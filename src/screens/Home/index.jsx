import { View, Text } from 'react-native'

import styles from './styles'

import Title from '../../components/Title'


export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Toddy is my birthday!"/>
    </View>
  )
}
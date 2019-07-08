/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{Component} from 'react';
import{AppRegistry,View,StyleSheet,Button,Alert} from 'react-native';

export default class ButtonBasics extends Component{

  _onPressButton(){
    Alert.alert("You tapped the button!")
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button 
          onPress={this._onPressButton} 
          title="press me" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
          onPress={this._onPressButton}
          title="press me"
          color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button 
          onPress={this._onPressButton}
          title="This looks great!"
          />
          <Button
          onPress={this._onPressButton}
          title="Ok!"
          color="#841584"
          />
        </View>
      </View>
       
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center"
  },
  buttonContainer:{
    margin:20
  },
  alternativeLayoutButtonContainer:{
    margin:20,
    flexDirection:'row',
    justifyContent:'space-between'
  }
})
AppRegistry.registerComponent("AwesomeProject",()=>ButtonBasics);
// import React, {Fragment} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

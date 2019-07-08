/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{Component} from 'react';
import{Alert,AppRegistry,Platform,StyleSheet,Text,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback,View} from 'react-native';

export default class Touchables extends Component{

  _onPressButton(){
    Alert.alert("You tapped the button!")
  }
  _onLongPressButton(){
    Alert.alert("You long-pressed the button!")
  }
  render(){
    return(
      <View style={styles.container}>
       <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
         <View style={styles.button}>
           <Text style={styles.buttonText}>TouchableHighlight</Text>
         </View>
       </TouchableHighlight>
       <TouchableOpacity onPress={this._onPressButton}>
         <View style={styles.button}>
           <Text style={styles.buttonText}>TouchableOpacity</Text>
         </View>
       </TouchableOpacity>
       <TouchableNativeFeedback
       onPress={this._onPressButton}
       background={Platform.OS==='android'?TouchableNativeFeedback.SelectableBackground():''}
       >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
       </TouchableNativeFeedback>
       <TouchableWithoutFeedback
       onPress={this._onPressButton}
       >
         <View style={styles.button}>
           <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
         </View>
       </TouchableWithoutFeedback>
       <TouchableHighlight onPress={this._onPressButton}
       onLongPress={this._onLongPressButton}
       underlayColor="white"
       >
         <View style={styles.button}>
           <Text style={styles.buttonText}>Touchable with Long Press</Text>
         </View>
       </TouchableHighlight>
      </View>
       
    );
  }
}
const styles=StyleSheet.create({
  container:{
    paddingTop:60,
    alignItems:'center'
  },
  button:{
    marginBottom:30,
    width:260,
    alignItems:'center',
    backgroundColor:'#2196F3'
  },
  buttonText:{
    padding:20,
    color:'white'
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

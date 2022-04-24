import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import axios from 'axios';


// get data from this URL!
// const movieURL = "https://reactnative.dev/movies.json";
const baseUrl = 'https://emr-system.000webhostapp.com';

const Api = () => {
  // managing state with 'useState'
  const [isLoading, setLoading] = useState(true);
  const [firtName, setFirstName] = useState([]);
  const [lastName, setLastname] = useState([]);
  const [status, setStatus] = useState("");


  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    // fetch(movieURL)
    //   .then((response) => response.json()) // get response, convert to json
    //   .then((json) => {
    //     setData(json.movies);
    //     setTitle(json.title);
    //     setDescription(json.description);
    //   })
    //   .catch((error) => alert(error)) // display errors
    //   .then(() => setLoading(false)); // change loading state
    axios({
        method: 'get',
        url: `${baseUrl}/emrappointment/emrappointment/patient/tehreemhussain1`,
      }).then((response) => {
          setFirstName(response.data.result[0].firstName)
          setLastname(response.data.result[0].lastName)
          setStatus(response.data.status)
          
            console.log(firtName);
            console.log(status)
      }).then(() => setLoading(false));
  }, []);

  // Also get call asynchronous function
//   async function getMoviesAsync() {
//     try {
//       let response = await fetch(movieURL);
//       let json = await response.json();
//       setData(json.movies);
//       setTitle(json.title);
//       setDescription(json.description);
//       setLoading(false);
//     } catch (error) {
//       alert(error);
//     }
//   }

  return (
    <SafeAreaView style={styles.container}>
      {/* While fetching show the indicator, else show response */}
      {isLoading ? (
          
          <ActivityIndicator size="large" color="#0000ff"/>
    
    ) : (
        <View>
          {/* Title from URL */}
          {/* <Text style={styles.title}>{title}</Text> */}
          {/* Display each movie */}
          <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
          {/* <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 10 }}>
                <Text style={styles.movieText}>
                  {item.id}. {item.title}, {item.releaseYear}
                </Text>
              </View>
            )}
          /> */}
          {/* Show the description */}
          <Text style={styles.description}>{firtName}</Text>
          <Text style={styles.description}>{lastName}</Text>
          <Text style={styles.description}>{status}</Text>


        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 48,
  },
  movieText: {
    fontSize: 26,
    fontWeight: "200",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginBottom: 18,
    fontWeight: "200",
    color: "green",
  },
});

export default Api;
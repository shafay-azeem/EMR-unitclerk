import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";

// get data from this URL!
const movieURL = "http://emr.daldaeagleseye.com/emrappointment/appointment/patient/tehreemhussain1/documents/laboratory";

const Api = () => {
  // managing state with 'useState'
  const [isLoading, setLoading] = useState(true);
  const [img, setimg] = useState([]);
  const [Img, setImg] = useState();
  // const [patientid, setpatientid] = useState([]);
  // const [description, setDescription] = useState([]);

  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    fetch(movieURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        console.log(json.result[9],"json")
        setimg(json.result[9].imgPath)
        console.log(img,"queen")
        // setData(json.movies);
        // setTitle(json.title);
        // setDescription(json.description);
        // fetchImage();
        console.log(img.toString(),'lol');
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);


  const fetchImage = async () => {
    const res = await fetch(img.toString());
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  // useEffect(() => {
  //   fetchImage();
  // }, []);
  // Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let response = await fetch(movieURL);
      let json = await response.json();
      setData(json.movies);
      setTitle(json.title);
      setDescription(json.description);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {/* Title from URL */}
          
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
          <Image
        style={[styles.tinyLogo,{backgroundColor:"green"}]}
        source={{uri: img}}

        
      />
          <Text>{img}</Text>
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
  tinyLogo: {
    width: 300,
    height: 530,
  },
});

export default Api;
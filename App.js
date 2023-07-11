import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="long-arrow-left" size={20} />
        <Text style={styles.editText}>Edit Profile</Text>
      </View>
      <View style={styles.main}>
        <View>
          <Image
            source={require("./assets/bernice.png")}
            style={styles.image}
          />
          <View style={styles.imagePickerContainer}>
            <FontAwesome
              name="picture-o"
              size={15}
              color="white"
              style={styles.imagePicker}
            />
          </View>
        </View>

        <View style={styles.div}>
          <Text style={styles.desc}>School</Text>
          <Text style={styles.title}>University of Calgary</Text>
        </View>

        <View>
          <Text style={styles.desc}>Email Address</Text>
          <Text style={styles.title}>bernyx.owusu@gmail.com</Text>
        </View>

        <View style={styles.div}>
          <Text style={[styles.desc, styles.blueText]}>Name</Text>
          <Text style={[styles.title, styles.line]}>Bernice Owusu</Text>
        </View>

        <View>
          <Text style={[styles.desc, styles.blueText]}>Nick Name</Text>
          <Text style={[styles.title, styles.line]}>b.ernie</Text>
        </View>

        <View style={styles.div}>
          <Text style={[styles.desc, styles.blueText]}>Emergency Contact</Text>
          <View style={[styles.call, styles.line]}>
            <Text style={styles.title}>+233-559184383</Text>
            <FontAwesome name="address-book-o" size={24} color={"#aaa"} />
          </View>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            UPDATE PROFILE
          </Text>
        </TouchableOpacity>

        <StatusBar style="light" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    padding: 50,
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    marginHorizontal: 10,
  },
  editText: {
    fontSize: 18,
    marginLeft: 120,
    // alignSelf: "center",
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  desc: {
    color: "#aaa",
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    height: 30,
  },
  div: {
    marginVertical: 20,
  },
  blueText: {
    color: "#01295F",
    fontWeight: "bold",
  },
  btn: {
    borderRadius: 50,
    backgroundColor: "#01295F",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 10,
  },
  imagePickerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: "#01295F",
    borderRadius: 20,
    position: "absolute",
    right: 80,
    top: 100,
  },
  line: {
    borderBottomWidth: 0.5,
    borderColor: "#aaa",
  },
  call: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require("./assets/profile_picture.jpg")}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>Katai Khoboko</Text>
        <Text style={styles.university}>- Limkokwing University</Text>
        <Text style={styles.studentNumber}>
          Student Number: <Text style={styles.bold}>901016686</Text>
        </Text>
        <Text style={styles.semester}>
          Current Semester: <Text style={styles.bold}>4</Text>
        </Text>
        <Text style={styles.gradesTitle}>Semester Grades:</Text>
        <View style={styles.gradeItem}>
          <Text>Probability and Statistics: A</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text>Mobile Device Programming: B+</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text>Java Programming I : A-</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text>C++ Programming II : A</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text>Data System: A-</Text>
        </View>
        <View style={styles.gradeItem}>
          <Text>Software Modelling: C</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Active"
            onPress={() => console.log("Status: Active")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#ccc",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  university: {
    fontWeight: "200", // Less than bold
    color: "gray", // Gray color
  },
  studentNumber: {
    fontSize: 16,
    marginBottom: 10,
  },
  semester: {
    marginRight: 60,
    fontSize: 16,
    marginBottom: 10,
  },
  gradesTitle: {
    marginRight: 200,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gradeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  bold: {
    fontWeight: "bold",
    color: "red",
  },
});

export default ProfileScreen;

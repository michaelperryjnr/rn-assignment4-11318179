import { StatusBar } from "expo-status-bar";
import { Text, View, Image, FlatList, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import { InputBar, JobOffer } from "../../components";
import JobCard from "../../components/jobCard";

const jobData = [
  {
    id: 1,
    company: "Facebook",
    role: "Software Engineer",
    salary: "$180,000",
    location: "Accra, Ghana",
    image: icons.facebookIcon,
    bgColor: "bg-cardBg1",
  },
  {
    id: 2,
    company: "Google",
    role: "Software Engineer",
    salary: "$180,000",
    location: "Accra, Ghana",
    image: icons.googleIcon,
    bgColor: "bg-cardBg2",
  },
];

const jobOffers = [
  {
    image: images.burgerKing,
    position: "Jr Executive",
    company: "Burger King",
    salary: "$96,000/y",
    location: "Los Angeles, CA",
  },
  {
    image: images.beats,
    position: "Product Manager",
    company: "Beats",
    salary: "$84,000/y",
    location: "Florida, US",
  },
  {
    image: icons.facebookIcon,
    position: "Product Manager",
    company: "Facebook",
    salary: "$86,000/y",
    location: "Florida, US",
  },
];

export default function HomePage() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full px-3 min-h-[85vh] pt-10">
        <View className="flex flex-row justify-between items-center ">
          <View className="flex flex-col items-start">
            <Text className="font-extrabold text-3xl">Eric Atsu</Text>
            <Text className="text-[18px] font-regular text-gray-400">
              eric@gmail.com
            </Text>
          </View>
          <View className="bg-white rounded-full px-2 py-2">
            <Image
              source={images.profile}
              resizeMode="contain"
              className="w-14 h-14"
            />
          </View>
        </View>
        <InputBar
          placeholder="Search a job or position"
          searchIcon={icons.search}
          isFilterable={true}
          filterIcon={icons.slider}
          otherStyles="mt-6"
        />
        <View className="px-3 flex flex-row justify-between items-center mt-6 mb-6">
          <Text className="font-bold text-xl">Featured Jobs</Text>
          <Text className="font-medium text-gray-600 text-xl">See all</Text>
        </View>
        <FlatList
          data={jobData}
          renderItem={({ item }) => (
            <JobCard
              role={item.role}
              company={item.company}
              salary={item.salary}
              location={item.location}
              bgColor={item.bgColor}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 16 }}
        />
        <View className="px-3 flex flex-row justify-between items-center mt-6 mb-6">
          <Text className="font-bold text-xl">Popular Jobs</Text>
          <Text className="font-medium text-gray-600 text-xl">See all</Text>
        </View>
        <SectionList
          sections={[{ title: "Job Offers", data: jobOffers }]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <JobOffer
              image={item.image}
              position={item.position}
              company={item.company}
              salary={item.salary}
              location={item.location}
            />
          )}
        />
      </View>
      <StatusBar backgroundColor="#FFFFFF" style="auto" />
    </SafeAreaView>
  );
}

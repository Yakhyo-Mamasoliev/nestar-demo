import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TopProperties from "@/libs/components/homepage/TopProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";

const Home: NextPage = () => {
	const device = useDeviceDetect();
	const {
		loading: getPropertiesLoading,
		data: getPropertiesData,
		error: getPropertiesError,
		refetch: getPropertiesRefetch,
	} = useQuery(GET_PROPERTIES, {
		fetchPolicy: "network-only",
		variables: {
			input: {
				page: 1,
				limit: 10,
				sort: "createdAt",
				direction: "DESC",
				search: {},
			},
		},
	});
	console.log("getPropertiesData =>", getPropertiesData);

	if (device === "mobile") {
		return <Stack>Mobile Homepage</Stack>;
	} else {
		return (
			<Stack className={"home-page"}>
				<TrendProperties />
				<PopularProperties />
				<Advertisement />
				<TopProperties />
				<TopAgents />
			</Stack>
		);
	}
};

export default withLayoutMain(Home);

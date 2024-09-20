import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<Stack>
			<Stack flexDirection={"column"}>
				<Stack className="container">Popular Properties</Stack>
				<Stack className="container">Top Agents</Stack>
				<Stack className="container">Top Properties</Stack>
			</Stack>
		</Stack>
	);
};

export default withLayoutMain(Home);

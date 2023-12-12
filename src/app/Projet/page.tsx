"use client";

import React, { useState, SyntheticEvent } from "react";

import Layout from "@/layout";

import Page from "@/components/Page";

import {
	Grid,
	Typography,
	Card,
	CardMedia,
	Box,
	Button,
	Tabs,
	Tab,
	CardContent,
} from "@mui/material";

import TabCompetence from "./tab";

const Projet = () => {
	const [value, setValue] = useState("all");

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Layout variant='main'>
			<Page title='Projet'>
				<Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
					<Typography variant='h1' component='h1' gutterBottom>
						<div
							style={{
								color: "#3E77B6",
								fontFamily: "Monoton, sans-serif",
								textAlign: "center",
								border: "solid black 1px",
								padding: "2vh",
								fontSize: "7vh",
							}}
						>
							PROJETS
						</div>
					</Typography>
					<Tabs
						value={value}
						onChange={handleChange}
						variant='scrollable'
						scrollButtons='auto'
					>
						<Tab label='Tous' value='all' />
						<Tab label='Jeux' value='jeux' />
						<Tab label='Site Web' value='web' />
						<Tab label='Production Graphique' value='product_graph' />
					</Tabs>
				</Box>
				<TabCompetence typeSelected={value} />
			</Page>
		</Layout>
	);
};

export default Projet;

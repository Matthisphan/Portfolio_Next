"use client";

import {
	Grid,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
} from "@mui/material";

const TabProjects = ({ typeSelected }: { typeSelected: string }) => {
	const listOfProject = [
		{
			image: "img_cooldown.png",
			title: "Cooldown",
			description:
				"Conception en local d'un réseau social similaire à Twitter en HTML / CSS / JS / PHP / JSON pour un projet de fin de deuxième année en BUT MMI.",
			href: "https://github.com/Matthisphan/Cooldown",
			type: "web",
		},
		{
			image: "img_burn.png",
			title: "Burn",
			description:
				"Projet de Terminal codé en python où le but est de survivre le plus longtemps possible tout en esquivant des boules de feu.",
			href: "https://github.com/Matthisphan/Burn",
			type: "jeux",
		},
		{
			image: "img_palan_consulting.png",
			title: "PALAN Consulting",
			description:
				"Conception de maquettes détaillées et refonte de la charte graphique à l'aide de Figma et intégration des conceptions élaborées avec WordPress Elementor pour l'entreprise PALAN Consulting",
			href: "https://www.palan-consulting.com",
			type: "web",
		},
		{
			image: "img_Flynt.png",
			title: "Flynt",
			description:
				"Conception d'un personnage en 3D sur Blender pour la création d'un jeu vidéo en troisème année de BUT MMI",
			href: "https://sketchfab.com/3d-models/flynt-b109b4f5ecbf42ce8c089193840d2a34",
			type: "product_graph",
		},
	];

	return (
		<Grid container spacing={2}>
			{listOfProject.map((project: any, index: number) => {
				if (project.type == typeSelected || typeSelected == "all") {
					return (
						<Grid item xs={12} md={4} key={index}>
							<Card
								sx={{ height: "100%", maxWidth: 345 }}
								onClick={() => window.open(project.href, "_blank")}
							>
								<CardActionArea sx={{ height: "100%" }}>
									<CardMedia
										component='img'
										height='140'
										image={`/images/${project.image}`}
										alt={project.title}
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											fontFamily='fantasy'
											justifyContent='justify'
										>
											{project.title}
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
											fontFamily='Poppins'
											justifyContent='justify'
										>
											{project.description}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					);
				}
			})}
		</Grid>
	);
};

export default TabProjects;

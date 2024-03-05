"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";

const TESTIMONIALS = [
	{
		feedback:
			"FitPro Connect transformed my fitness journey. Their personalized coaching kept me motivated and accountable. I've seen amazing results!",
		client: "Jessica Devis",
		title: "CEO @ MARKETING DIGITAL LTD.",
		img: "/image/avatar1.jpg",
	},
	{
		feedback:
			"FitPro Connect made fitness fit into my busy schedule. Their flexible workouts let me prioritize my health without stress. Thank you, FitPro Connect!",
		client: "Mary Joshiash",
		title: "MARKETING @ TELEVIVE INC.",
		img: "/image/avatar2.jpg",
	},
	{
		feedback:
			"FitPro Connect made fitness less intimidating. Their personalized plan and support boosted my confidence. I'm amazed at my progress!",
		client: "Marcell Glock",
		title: "CFO @ BRINK INC..",
		img: "/image/avatar3.jpg",
	},
];

export function Testimonials() {
	return (
		<section className="px-10 !py-20">
			<div className="container mx-auto">
				<div className="mb-20 flex w-full flex-col items-center">
					<div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
						<UserIcon className="h-6 w-6" />
					</div>
					<Typography variant="h2" color="blue-gray" className="mb-2">
						What Clients Say
					</Typography>
					<Typography
						variant="lead"
						className="mb-10 max-w-3xl text-center !text-gray-600"
					>
						Discover what our valued clients have to say about their
						experiences with our services. We take pride in
						delivering exceptional results and fostering lasting
						partnerships.
					</Typography>
				</div>
				<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
					{TESTIMONIALS.map((props, key) => (
						<TestimonialCard key={key} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
export default Testimonials;

import React, { useState } from "react";
import Tabs from "../../UI/Tabs";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaTasks } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";

const CourseDetails = ({ details }) => {
	const [tab, setTab] = useState("about");

	const handleTabChange = (tabname) => {
		setTab(tabname);
	};

	return (
		<div>
			<div className="mt-5 lg:mt-20 lg:w-2/3 px-5 lg:px-16 xl:px-28">
				<Tabs variant="primary" className="hidden lg:flex border-b-2">
					<NavLink
						className={`${tab === "about" ? "bg-black/5 " : ""}`}
						onClick={() => handleTabChange("about")}
					>
						About
					</NavLink>
					<NavLink
						className={`${tab === "modules" ? "bg-black/5 " : ""}`}
						onClick={() => handleTabChange("modules")}
					>
						Modules
					</NavLink>
					<NavLink
						className={`${tab === "testimonials" ? "bg-black/5 " : ""}`}
						onClick={() => handleTabChange("testimonials")}
					>
						Testimonials
					</NavLink>
					<NavLink
						className={`${tab === "reviews" ? "bg-black/5 " : ""}`}
						onClick={() => handleTabChange("reviews")}
					>
						Reviews
					</NavLink>
				</Tabs>

				<div className="text-neutral py-5">
					<h2 className="font-semibold text-lg">What you'll learn</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
						{details.learn.map((item, index) => (
							<div key={index} className="flex gap-5 items-center py-1">
								<BiCheck className="text-xl" />
								<p>{item}</p>
							</div>
						))}
					</div>
				</div>

				<div className="text-neutral py-5">
					<h2 className="font-semibold text-lg">Skills you'll gain</h2>
					<div className="flex flex-wrap gap-2 py-2">
						{details.skills_covered.map((item, index) => (
								<p key={index} className="bg-black/15 text-sm py-2 px-3 rounded-badge">{item}</p>
						))}
					</div>
				</div>

				<div className="text-neutral pb-5">
					<h2 className="font-semibold text-lg">Details to know</h2>
					<div className="flex w-full flex-wrap *:w-full sm:*:w-1/2 lg:*:w-1/3">
						<div className="flex flex-col gap-1 py-4">
							{details.certificate.offered ? (
								<FaLinkedin className="text-primary size-7" />
							) : (
								<GrCertificate className="size-7" />
							)}
							<div className="flex flex-col gap-1">
								{details.certificate.offered ? (
									<>
										<h4 className="font-medium">{details.certificate.type}</h4>
										<p className="text-sm">Add to your linkedin profile</p>
									</>
								) : (
									<>
										<h4 className="font-medium">Non certificate course</h4>
										<p className="text-sm">Learn and gain experience</p>
									</>
								)}
							</div>
						</div>

						<div className="flex flex-col gap-1 py-4">
							<FaTasks className="size-7" />
							<h4 className="font-medium">Assessments</h4>
							<p className="text-sm">5 assignments</p>
						</div>

						<div className="flex flex-col gap-1 py-4">
							<HiOutlineChatBubbleLeftEllipsis className="size-7" />
							<h4 className="font-medium">Taught in English</h4>
							<p className="text-sm font-semibold text-primary hover:text-primary-dark cursor-pointer hover:underline">
								2 languages available
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;

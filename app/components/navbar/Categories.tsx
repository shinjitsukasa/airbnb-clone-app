import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'This property is close to the beach!'
	},
	{
		label: 'Windmillls',
		icon: GiWindmill,
		description: 'This property has windmill!',
	},
	{
		label: 'Modern',
		icon: MdOutlineVilla,
		description: 'This property is modern!',
	},
	// {
	// 	label: 'Windmillls',
	// 	icon: GiWindmill,
	// 	description: 'This property has windmill!',
	// },
]

const Categories = () => {
	return ( 
		<Container>
			<div
			className="
			pt-4
			flex
			flex-row
			items-center
			justify-between
			overflow-x-auto
			"
			>

			</div>
		</Container>
	 );
}
 
export default Categories;
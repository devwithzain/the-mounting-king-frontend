import axios from "axios";
import Link from "next/link";

export default function EditButton({
	id,
	path,
	url,
}: {
	id: string;
	path: string;
	url: string;
}) {
	const editPost = async (id: string) => {
		try {
			await axios.patch(`${path}/${id}`, {
				data: {
					id,
				},
			});
		} catch (error) {
			console.log("Error", error);
		}
	};

	return (
		<Link
			onClick={() => editPost(id)}
			href={`/${url}/${id}`}
			className="text-[14px]  font-semibold bg-[#081226] text-white py-2 px-4 rounded-lg">
			Edit
		</Link>
	);
}

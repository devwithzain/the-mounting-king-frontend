import { TModalProps } from "@/types";

export default function Modal({ isOpen, body }: TModalProps) {
	if (!isOpen) {
		return null;
	}
	return (
		<>
			<div className="w-full flex h-screen items-center justify-center inset-0 z-50 fixed backdrop-blur-sm">
				{body}
			</div>
		</>
	);
}

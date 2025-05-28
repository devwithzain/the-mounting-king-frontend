import Modal from "./modal";
import { useEffect, useState } from "react";
import { TuseAlerteModalProps } from "@/types";
import { Button } from "@/components/ui/button";

export default function AlertModal({
	isOpen,
	loading,
	onClose,
	onConfirm,
}: TuseAlerteModalProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Modal
			title="Are you sure"
			description="This action cannot be undone."
			isOpen={isOpen}
			onClose={onClose}>
			<div className="flex pt-6 space-x-2 items-center justify-end w-full">
				<Button
					disabled={loading}
					variant="outline"
					onClick={onClose}>
					Cancel
				</Button>
				<Button
					disabled={loading}
					variant="destructive"
					onClick={onConfirm}>
					Continue
				</Button>
			</div>
		</Modal>
	);
}

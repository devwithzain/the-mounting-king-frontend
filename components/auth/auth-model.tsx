"use client";
import Modal from "../client/modal";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import useLoginModal from "@/hooks/use-login-modal";
import useRegisterModal from "@/hooks/use-register-modal";

export default function AuthModal() {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	return (
		<>
			<Modal
				isOpen={loginModal.isOpen}
				onClose={loginModal.onClose}
				body={<LoginForm onClose={loginModal.onClose} />}
			/>
			<Modal
				isOpen={registerModal.isOpen}
				onClose={registerModal.onClose}
				body={<RegisterForm onClose={registerModal.onClose} />}
			/>
		</>
	);
}

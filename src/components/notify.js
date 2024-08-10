import { toast } from "react-toastify"

	const notifyTimeline = () => {
		toast.warn("Timeline is subject to change");
	};
	const notifyContact = () => {
		toast.info("We are always there for you");
	};
    const notifyEvent = () => {
		toast("🔥 10+ events for you don't miss the chance");
	};
    const notifyParticipate = () => {
			toast("🎉 Participate and let the fun begin");
	};
    const notifyWarning = () => {
		toast.warning("Make sure to fill the details correctly");
	};
    const notifySuccess = () => {
		toast.success("Form submitted successfully");
	};
	const notifyError = () => {
		toast.error("Failed to submit the form");
	};
	const notifyTeam = () => {
		toast("💚 Meet out prestigious team", {theme: 'light', bodyClassName:'toast-body-light', progressClassName:'toast-progress-light'});
	};

export {notifyContact, notifyTimeline, notifyEvent, notifyParticipate, notifyWarning, notifySuccess, notifyError, notifyTeam};
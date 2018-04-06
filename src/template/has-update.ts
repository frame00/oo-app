export default (): string => {
	return `
	<style>
		#updateToast {
			display: none;
			position: fixed;
			width: 90%;

			left: 50%;
			transform: translateX(-50%);
			box-shadow: 0 25px 60px #00000042;
			background: #2196f3;
			color: white;
			font-weight: 600;
			padding: 1rem 2rem;
			border-radius: 99px;
			cursor: pointer;
			box-sizing: border-box;

			animation-name: showNotification;
			animation-duration: 0.3s;
			animation-fill-mode: forwards;

			@media (min-width: 768px) {
				width: auto;
			}
		}
		@keyframes showNotification {
			from {
				opacity: 0;
				bottom: -100px;
			}
			to {
				opacity: 1;
				bottom: 40px;
			}
		}
	</style>
	<div id=updateToast onclick="location.reload()">A new version is available.<br />Update now!</div>
	`
}

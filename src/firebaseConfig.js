import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

const FirebaseDatabase = () => {

	const firebaseConfig = {
		apiKey: "AIzaSyD6GEqtrTugfzOcT0sODreDo6mTGiKxO0Y",
		authDomain: "welbex-tz.firebaseapp.com",
		projectId: "welbex-tz",
		storageBucket: "welbex-tz.appspot.com",
		messagingSenderId: "875523637890",
		appId: "1:875523637890:web:435f671a275bd5e1edea9b",
		measurementId: "G-T0207ZKPJP"
	};

	const app = initializeApp(firebaseConfig);

	return(getDatabase(app));
}

export default FirebaseDatabase;
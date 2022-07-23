import React, {useState} from "react";
import S from "./App.module.sass";
import Table from "./components/table/Table";
import FirebaseDatabase from "./firebaseConfig";
import {ref, get, child} from "firebase/database";
import {useDispatch} from "react-redux";
import {setData, setCurrentPage, setPageSize} from "./slices/tableSlice";
import Spinner from "./components/spinner/Spinner";

const App = () => {
	const db = FirebaseDatabase();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true)

	get(child(ref(db), 'TableData/'))
		.then((snapshot) => {
			dispatch(setData(snapshot.val()));
			dispatch(setPageSize(window.screen.height <= 768 ? 10 : 15));
			setLoading(false);
		})

	return (
		<div className={S.container}>
			{loading ? <Spinner/> : <Table />}
		</div>
	)
}

export default App;
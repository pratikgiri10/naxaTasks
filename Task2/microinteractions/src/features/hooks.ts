import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useCallback } from "react";
import { RootState, AppDispatch } from "../../core/store/store";
import { DanceCourseRepository } from "../../core/services/danceCourse.repository";
import { loadDanceCoursesAsync, createDanceCoursesAsync, deleteDanceCourseAsync } from "../redux/danceCourse.slice";
import { DanceCourse } from "../models/danceCourse";


export function useDanceCourses() {

  const { danceCourses } = useSelector((state: RootState) => state.danceCourses);
  const { token } = useSelector((state: RootState) => state.users)

  const dispatch: AppDispatch = useDispatch();

  const url = "http://localhost:4545/danceCourse";

  const repo: DanceCourseRepository = useMemo(
    () => new DanceCourseRepository(url, token as string), [token]);

  const loadDanceCourses = useCallback(async () => {
    await dispatch(loadDanceCoursesAsync(repo));
  }, [repo, dispatch]);

  const createDanceCourses = async (danceCourse: FormData ) => {
    await dispatch(createDanceCoursesAsync({ repo, danceCourse }));
  };

  const deleteDanceCourses = async (id: DanceCourse["id"]) => {
    await dispatch(deleteDanceCourseAsync({ repo, id}));
  }

  return {
    danceCourses,
    loadDanceCourses,
    createDanceCourses,
    deleteDanceCourses,
  };
}
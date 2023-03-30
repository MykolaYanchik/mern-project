import { setFormErrorAction } from "../slices/common";
import commonApi from "./index";

const extendedApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation({
      query: ({ data }) => ({
        url: "/user/registration",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ runSideEffects }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("auth", data.accessToken);
          if (runSideEffects) {
            runSideEffects();
          }
        } catch (e) {
          const { error } = e;
          dispatch(setFormErrorAction(error.data.message))
        }
      },
    }),
  }),
});

export const { useRegistrationMutation } = extendedApi;

import {
  createNavigationContainerRef,
  StackActions,
} from "@react-navigation/native";
import { createRef } from "react";

export const navigationRef = createNavigationContainerRef();
export const isMountedRef = createRef();

export const navigate = (name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const navigatePop = () => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.pop());
  }
};

export const popToTop = () => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
};

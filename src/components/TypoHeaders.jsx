import * as React from "react";
import {
  makeStyles,
  mergeClasses,
  typographyStyles,
  tokens,
} from "@fluentui/react-components";

const _headerStyles = makeStyles({
  root: { display: "block" },
});

const _subtitleStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground4,
  },
});

const subtitle2Styles = makeStyles({
  text: typographyStyles.subtitle2,
});

const subtitle1Styles = makeStyles({
  text: typographyStyles.subtitle1,
});

const h3Styles = makeStyles({
  text: typographyStyles.title3,
});

const h2Styles = makeStyles({
  text: typographyStyles.title2,
});

const h1Styles = makeStyles({
  text: typographyStyles.title1,
});

const largeTitleStyles = makeStyles({
  text: typographyStyles.largeTitle,
});

const displayStyles = makeStyles({
  text: typographyStyles.display,
});

const BaseHeader = (props) => {
  const headerStyles = _headerStyles();
  const styles = props.styles;
  const additionalStyles = props.additionalStyles || [];

  return (
    <span
      className={mergeClasses(
        styles.text,
        headerStyles.root,
        ...additionalStyles
      )}
    >
      {props.children}
    </span>
  );
};

export const Subtitle2 = (props) => {
  const styles = subtitle2Styles();
  const subStyles = _subtitleStyles();

  return (
    <BaseHeader styles={styles} additionalStyles={[subStyles.root]}>
      {props.children}
    </BaseHeader>
  );
};

export const Subtitle1 = (props) => {
  const styles = subtitle1Styles();
  const subStyles = _subtitleStyles();

  return (
    <BaseHeader styles={styles} additionalStyles={[subStyles.root]}>
      {props.children}
    </BaseHeader>
  );
};

export const H3 = (props) => {
  const styles = h3Styles();
  const additionalStyles = props.additionalStyles || [];

  return (
    <BaseHeader styles={styles} additionalStyles={additionalStyles}>
      {props.children}
    </BaseHeader>
  );
};

export const H2 = (props) => {
  const styles = h2Styles();
  const additionalStyles = props.additionalStyles || [];

  return (
    <BaseHeader styles={styles} additionalStyles={additionalStyles}>
      {props.children}
    </BaseHeader>
  );
};

export const H1 = (props) => {
  const styles = h1Styles();
  const additionalStyles = props.additionalStyles || [];

  return (
    <BaseHeader styles={styles} additionalStyles={additionalStyles}>
      {props.children}
    </BaseHeader>
  );
};

export const LargeTitle = (props) => {
  const styles = largeTitleStyles();
  const additionalStyles = props.additionalStyles || [];

  return (
    <BaseHeader styles={styles} additionalStyles={additionalStyles}>
      {props.children}
    </BaseHeader>
  );
};

export const Display = (props) => {
  const styles = displayStyles();
  const additionalStyles = props.additionalStyles || [];

  return (
    <BaseHeader styles={styles} additionalStyles={additionalStyles}>
      {props.children}
    </BaseHeader>
  );
};

import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  FormM,
  InputM,
  ButtonM,
  SelectM,
  FormControlM,
  CheckboxM
} from "../components/form-elements";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  textField: {},
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

function SearchPanel(props, regex) {
  const { classes } = props;
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("");
  const [agreement, setAgreement] = useState(true);

  function check(value, regex) {
    return !RegExp(regex).test(value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    console.log("values", phone, currency, agreement);
  };

  return (
    <div className={classes.main}>
      <FormM className={classes.form} onSubmit={onSubmit}>
        <FormControlM>
          <InputM
            name="phone"
            value={phone}
            className={classes.textField}
            onChange={phone => setPhone(phone)}
            options={{ error: check(phone, /\d{3}/) }}
          >
            Nr telefonu
          </InputM>
        </FormControlM>
        <FormControlM>
          <SelectM
            name="currency"
            value={currency}
            onChange={currency => setCurrency(currency)}
            items={currencies}
          />
        </FormControlM>

        <CheckboxM
          name="agreement"
          value={agreement}
          label="Wyrażam zgodę"
          onChange={agreement => setAgreement(agreement)}
          options={{ color: "secondary" }}
        />

        <ButtonM
          className={classes.submit}
          options={{
            color: "primary",
            variant: "contained",
            fullWidth: true,
            disabled: check(phone, /\d{3}/)
          }}
        >
          OK
        </ButtonM>
      </FormM>
    </div>
  );
}

SearchPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchPanel);

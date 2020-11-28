import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';

class StreamForm extends React.Component {
  renderInput = ({
    name,
    input,
    label,
    meta,
  }) => (
    <Form.Field>
      <label htmlFor={name}>{label}</label>
      <Form.Input
        error={(meta.touched && meta.error)
          ? {
            content: meta.error,
            pointing: 'below',
          } : undefined}
        input={(
          <input
            autoComplete="off"
            {...input}
          />
        )}
      />
    </Form.Field>
  );

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)} error>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);

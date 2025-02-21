import React from 'react'
import {Meta} from '@storybook/react'
import {BaseStyles, Checkbox, CheckboxGroup, FormControl, ThemeProvider} from '../../'
import {CheckboxOrRadioGroupArgs} from '../../utils/story-helpers'

export default {
  title: 'Components/Forms/CheckboxGroup/examples',
  component: CheckboxGroup,
  argTypes: {
    // CheckboxGroup
    disabled: {
      defaultValue: false,
      type: 'boolean'
    },
    required: {
      defaultValue: false,
      type: 'boolean'
    },

    // CheckboxGroup.Label
    labelChildren: {
      defaultValue: 'Choices',
      type: 'string',
      table: {
        category: 'CheckboxGroup.Label'
      }
    },
    visuallyHidden: {
      defaultValue: false,
      type: 'boolean',
      table: {
        category: 'CheckboxGroup.Label'
      }
    },

    // CheckboxGroup.Caption
    captionChildren: {
      defaultValue: '',
      type: 'string',
      table: {
        category: 'CheckboxGroup.Caption'
      }
    },

    // CheckboxGroup.Validation
    validationChildren: {
      defaultValue: '',
      type: 'string',
      table: {
        category: 'CheckboxGroup.Validation'
      }
    },
    variant: {
      defaultValue: 'error',
      control: {
        type: 'radio',
        options: ['error', 'success', 'warning']
      },
      table: {
        category: 'CheckboxGroup.Validation'
      }
    }
  },
  parameters: {controls: {exclude: ['aria-labelledby', 'id', 'onChange', 'sx']}},
  decorators: [
    Story => {
      return (
        <ThemeProvider>
          <BaseStyles>
            <Story />
          </BaseStyles>
        </ThemeProvider>
      )
    }
  ]
} as Meta

export const Default = ({
  disabled,
  required,
  labelChildren,
  visuallyHidden,
  captionChildren,
  validationChildren,
  variant
}: CheckboxOrRadioGroupArgs) => {
  const parentArgs = {disabled, required}
  const labelArgs = {children: labelChildren, visuallyHidden}
  const validationArgs = {children: validationChildren, variant}

  return (
    <CheckboxGroup {...parentArgs}>
      {labelArgs.children && <CheckboxGroup.Label {...labelArgs} />}
      {captionChildren && <CheckboxGroup.Caption>{captionChildren}</CheckboxGroup.Caption>}
      <FormControl>
        <Checkbox value="one" defaultChecked />
        <FormControl.Label>Choice one</FormControl.Label>
      </FormControl>
      <FormControl>
        <Checkbox value="two" defaultChecked />
        <FormControl.Label>Choice two</FormControl.Label>
      </FormControl>
      <FormControl>
        <Checkbox value="three" />
        <FormControl.Label>Choice three</FormControl.Label>
      </FormControl>
      {validationArgs.children && <CheckboxGroup.Validation {...validationArgs} />}
    </CheckboxGroup>
  )
}

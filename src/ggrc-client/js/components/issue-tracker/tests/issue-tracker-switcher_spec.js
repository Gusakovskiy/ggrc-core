/*
    Copyright (C) 2018 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

import {getComponentVM} from '../../../../js_specs/spec_helpers';
import Component from '../issue-tracker-switcher';

describe('issue-tracker-switcher component', () => {
  let viewModel;

  beforeAll(() => {
    viewModel = getComponentVM(Component);
  });

  describe('"convertToBool" method', () => {
    let convertToBoolMethod;

    beforeAll(() => {
      convertToBoolMethod = viewModel.convertToBool;
    });

    it('should convert empty string to FALSE', () => {
      let result = convertToBoolMethod('');
      expect(result).toBeFalsy();
    });

    it('should convert "false" string to FALSE', () => {
      let result = convertToBoolMethod('false');
      expect(result).toBeFalsy();
    });

    it('should not convert boolean. FALSE', () => {
      let result = convertToBoolMethod(false);
      expect(result).toBeFalsy();
    });

    it('should not convert boolean. TRUE', () => {
      let result = convertToBoolMethod(true);
      expect(result).toBeTruthy();
    });

    it('should convert "true" string to TRUE', () => {
      let result = convertToBoolMethod('true');
      expect(result).toBeTruthy();
    });

    it('should convert non empty string to TRUE', () => {
      let result = convertToBoolMethod('hello world');
      expect(result).toBeTruthy();
    });
  });
});

'use client';

import styled from 'styled-components';
import { Button as HeadlessButton, ButtonProps as HeadlessProps } from '@headlessui/react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends HeadlessProps {
  icon?: any;
  variant?: 'outlined' | 'primary' | 'danger' | 'secondary';
  type?: 'button' | 'reset' | 'submit';
  children?: ReactNode;
}
export const SC_Button = styled(HeadlessButton)<ButtonProps>`
  --background: ${(props) =>
    ({ theme }) =>
      props.variant === 'primary'
        ? theme.primaryColor
        : props.variant === 'secondary'
          ? theme.secondaryColor
          : props.variant === 'danger'
            ? theme.dangerColor
            : 'inherit'};

  --border: ${(props) =>
    ({ theme }) =>
      props.variant !== 'outlined' ? 'none' : `solid ${theme.primaryColor} 1px`};

  --text-color: ${(props) =>
    ({ theme }) =>
      props.variant === 'outlined' ? theme.primaryColor : theme.labelColor};

  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--background);
  color: var(--text-color);
  border: var(--border);
  padding: 8px;

  &:hover {
    opacity: 0.8;
    transition: all ease-in-out 300ms;
  }

  &[data-headlessui-state='hover active'] {
    @keyframes click {
      0% {
        opacity: 0.8;
      }
      25% {
        opacity: 0.25;
      }
      75% {
        opacity: 0.75;
      }
      100% {
        opacity: 1;
      }
    }

    animation: 500ms ease-in-out alternate click;
  }
`;

function AppButton(props: ButtonProps) {
  const { children, icon, variant, ...rest } = props;
  return (
    <SC_Button
      className={cn('', 'rounded-full text-white', props.className)}
      variant={variant ?? 'primary'}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </SC_Button>
  );
}

export default AppButton;

import { AuthSplitLayout } from 'src/layouts/auth-split';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <GuestGuard>
      <AuthSplitLayout section={{
        title: 'Hi, Welcome back',
        subtitle: 'Explore your project status by signing in',
      }}>{children}</AuthSplitLayout>
    </GuestGuard>
  );
}

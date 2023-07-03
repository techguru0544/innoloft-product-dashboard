export const SYSTEM: Readonly<{ HOME: string }> = Object.freeze({
  HOME: '/'
});

// Dashboard Routes
export const DASHBOARD_ROUTE: Readonly<{
  HOME: string;
}> = Object.freeze({
  HOME: SYSTEM.HOME
});

export const PRODUCT_ROUTE: Readonly<{
  PRODUCT_VIEW: string;
}> = Object.freeze({
  PRODUCT_VIEW: `${DASHBOARD_ROUTE.HOME}product/:productId`,
  PRODUCT_EDIT: `${DASHBOARD_ROUTE.HOME}product/edit/:productId`
});

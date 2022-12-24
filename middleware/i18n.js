export default function ( context ) {
  const { app, store } = context;
  if ( process.server ) {
    const locale = app.$cookies.get( "lang" );
    if ( locale ) {
      store.commit( "SET_LANG", locale );
    } else {
      app.$cookies.set( "lang", "en" );
    }
  }
}

import React,{useEffect} from 'react'

function MenuTreeHelper() {
  return (
    useEffect(() => {
        const árboles = ventana.$('[widget de datos="treeview"]');
        árboles.Treeview('init');
        }, [])
  )
}

export default MenuTreeHelper




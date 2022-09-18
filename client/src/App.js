

function App() {
    const pathName = useLocation();

    return (
        <div className='App'>
            <NavBar />
            {pathName.pathname === '/' || pathName.pathname === "/Register" || pathName.pathname === "/Home"
                ?
                <TransitionGroup>
                    <CSSTransition key={pathName.key} classNames="slide" timeout={600}>
                        <Routes location={pathName}>
                            <Route path='/' index element={<Login />} />
                            <Route path='/Register' element={<Register />} />
                            <Route path='/Home' element={<Home />} />

                            {/* INSERT ROUTES HERE */}
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
                :
                <Routes location={pathName}>
                    <Route path='/' index element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/Home' element={<Home />} />
                     {/* INSERT ROUTES HERE */}
                </Routes>
            }
            <Footer />
        </div>
    )
}

export default App;
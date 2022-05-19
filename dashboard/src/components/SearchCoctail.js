import React,{useEffect,useState,useRef} from 'react';

function SearchCoctail(){
	const apiKey = 'c39fef59'; // Intenta poner cualquier cosa antes para probar
	const inputTag = useRef();
	const [coctail, setCoctail] = useState([])
	const [keyword, setKeyword] = useState('wine')
	const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
      "X-RapidAPI-Key": "0189b27828msh83571956534a58ep1136ecjsn80c22c9251e7",
    },
	};

	useEffect(()=>{
			fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${keyword}`, options)
        .then((response) => response.json())
        .then((data) => {
					if (data.drinks === 'None Found') {
            setCoctail([]);
          } else {
						setCoctail(data.drinks);
          }
        })
        .catch((error) => console.log(error));
	},[keyword])

	const searchCoctail = (e) => {
    e.preventDefault();
    const value = inputTag.current.value;
    setKeyword(value);
  };

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={searchCoctail}>
								<div className="form-group">
									<label htmlFor="">Buscar por licor en el cóctel:</label>
									<input ref={inputTag} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Buscar</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Cócteles para la palabra: {keyword}</h2>
						</div>
						{/* Listado de Cocteles */}
						{
							coctail.length > 0 && coctail.map((coctail, i) => {
								return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div
                      className="card shadow mb-4"
                      style={{ width: "350px" }}
                    >
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {coctail.strDrink}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={coctail.strDrinkThumb}
                            alt={coctail.strDrink}
                            style={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
							})
						}
					</div>
					{ coctail.length === 0 && <div className="alert alert-warning text-center">No se encontraron cócteles</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchCoctail;
import React, { useRef } from 'react';
import {
	List,
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache
} from 'react-virtualized';

function User({ users }) {
	const cache = useRef(
		new CellMeasurerCache({
			fixedWidth: true,
			defaultHeight: 100
		})
	);

	return (
		<div>
			<div style={{ width: '100%', height: '100vh' }}>
				<AutoSizer>
					{({ width, height }) => (
						<List
							width={width}
							height={height}
							rowHeight={cache.current.rowHeight}
							defferedMeasurementCache={cache.current}
							rowCount={users.length}
							rowRenderer={({
								key,
								index,
								style,
								parent
							}) => {
								const person = users[index];
								return (
									<CellMeasurer
										key={key}
										cache={cache.current}
										parent={parent}
										columnIndex={0}
										rowIndex={index}
									>
										<div style={style}>
											<img
												src={person.avatar}
												alt={person.id}
											/>

											<div>
												<h1>
													{
														person.first_name
													}
												</h1>
												<p>{person.email}</p>
											</div>
										</div>
									</CellMeasurer>
								);
							}}
						/>
					)}
				</AutoSizer>
			</div>
		</div>
	);
}

export default User;

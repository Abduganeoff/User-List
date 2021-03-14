import React, { useRef, memo } from 'react';
import {
	List,
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache
} from 'react-virtualized';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/UserStyles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';

function User({ users, classes, toggle, print }) {
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
											<li
												className={
													classes.listItem
												}
												onClick={() => {
													toggle(person.id);
												}}
											>
												<div>
													<img
														className={
															classes.avatar
														}
														src={
															person.avatar
														}
														alt={
															person.id
														}
													/>
												</div>
												<div
													className={
														classes.content
													}
												>
													<h1>
														{`${person.first_name} ${person.last_name}`}
													</h1>
													<p>
														{person.email}
													</p>
												</div>
												<ListItemSecondaryAction
												>
													<IconButton aria-label="Checkbox">
														<Checkbox
															tabIndex={
																-1
															}
															checked={
																person.isChecked
															}
															// onClick={() => {
															// 	toggle(person.id);
															// 	console.log(person.isChecked);
															// }}
														/>
													</IconButton>
												</ListItemSecondaryAction>
											</li>
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

export default memo(withStyles(styles)(User));

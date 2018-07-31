import React, { Component } from "react";
import Pagination from "react-js-pagination";
import $ from 'jquery';
import {pageType} from "../../actions";
import stores from '../../stores';
import Modal from 'react-bootstrap-modal';

class Videos extends Component {
	constructor(props) {
		super(props);

		this.handlePageChanged = this.handlePageChanged.bind(this);
		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.saveAndClose = this.saveAndClose.bind(this);

		this.state = {
			page: {
				total: 450,
				page_size: 20,
				page_index: 1,
				visiblePage: 5
			},
			modal: {
				isShow: false
			}
		};
	}

	componentWillMount() {
		stores.dispatch({
			type: pageType.SET_PAGE,
			info: {
				title: 'Videos',
				name: 'Videos',
				description: 'Manager'
			}
		});
	}

	handlePageChanged(newPage) {
		const state = this.state;
		state.page.page_index = newPage;
		this.setState(state);
	}

	showModal() {
		let state = this.state;
		state.modal.isShow = true;
		this.setState(state);
		setTimeout(() => {
			$('.modal').css({display: 'block', 'padding-right': '15px'});
		}, 100);
	};

	closeModal() {
		let state = this.state;
		state.modal.isShow = false;
		this.setState(state);
	};

	saveAndClose() {
		console.log('save');
		this.closeModal();
	}

	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-xs-12">
						<div className="box">
							<div className="box-header">
								<h3 className="box-title">List videos</h3>
							</div>
							<div className="box-body">
								<div className="dataTables_wrapper form-inline dt-bootstrap">
									<div className="row">
										<div className="col-sm-12">
											<table className="table table-bordered table-striped">
												<thead>
												<tr>
													<th>Rendering engine</th>
													<th>Browser</th>
													<th>Platform(s)</th>
													<th>Engine version</th>
													<th>CSS grade</th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<td>Trident</td>
													<td>Internet
														Explorer 4.0
													</td>
													<td>Win 95+</td>
													<td> 4</td>
													<td>X</td>
												</tr>
												<tr>
													<td>Trident</td>
													<td>Internet
														Explorer 5.0
													</td>
													<td>Win 95+</td>
													<td>5</td>
													<td>C</td>
												</tr>
												</tbody>
												<tfoot>
												<tr>
													<th>Rendering engine</th>
													<th>Browser</th>
													<th>Platform(s)</th>
													<th>Engine version</th>
													<th>CSS grade</th>
												</tr>
												</tfoot>
											</table>
										</div>
									</div>

									<div className="row">
										<div className="col-sm-5">
											<div className="dataTables_info">Showing 1 to 10 of 57 entries</div>
										</div>
										<div className="col-sm-7">
											<Pagination
												totalItemsCount={this.state.page.total}
												itemsCountPerPage={this.state.page.page_size}
												activePage={this.state.page.page_index}
												pageRangeDisplayed={this.state.page.visiblePage}
												onChange={this.handlePageChanged}
												firstPageText={<i className='fa fa-fast-backward'/>}
												lastPageText={<i className='fa fa-fast-forward'/>}
												prevPageText={<i className='fa fa-step-backward'/>}
												nextPageText={<i className='fa fa-step-forward'/>}
											/>
										</div>
									</div>

								</div>
							</div>

							<div className="box-footer">
								<div className="row">
									<div className="col-xs-12 text-center">
										<button onClick={this.showModal} className="btn btn-primary" type="button"><i className="fa fa-plus"></i> Add</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<Modal
					show={this.state.modal.isShow}
					onHide={this.closeModal}
					aria-labelledby="ModalHeader"
				>
					<Modal.Header closeButton>
						<Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Some Content here</p>
					</Modal.Body>
					<Modal.Footer>
						<button className='btn btn-primary' onClick={this.saveAndClose}>
							Save
						</button>
						<Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Videos;
import React from "react";
import NoteIndexItem from "./note_index_item";
import CreateNoteContainer from "./create_note_container";

class NotesIndex extends React.Component {
	constructor(props) {
		super(props);
		this.parentDeleteNote = this.parentDeleteNote.bind(this);
		this.parentCreateNote = this.parentCreateNote.bind(this);
	}

	componentDidMount() {
		this.props.fetchNotes();
	}

	parentDeleteNote(id) {
		this.props.deleteNote(id).then(() => this.props.fetchNotes());
	}

	parentCreateNote(id) {
		this.props.createNote(id).then(() => this.props.fetchNotes());
	}

	sortNotes() {
		return this.props.notes.sort((a, b) => a.position - b.position);
	}

	renderNotes() {
		let sortedNotes = this.sortNotes();
		return sortedNotes.map(note => (
			<NoteIndexItem
				key={note.id}
				note={note}
				position={note.position}
				deleteNote={this.parentDeleteNote}
				openModal={this.props.openModal}
				closeModal={this.props.closeModal}
				history={this.props.history}
			/>
		));
	}

	render() {
		return (
			<div id="note-index-form-container">
				<CreateNoteContainer id="create-note-form" />
				<div id="list-container">
					<ul id="notes-list">{this.renderNotes()}</ul>
				</div>
			</div>
		);
	}
}
export default NotesIndex;

class Api::NotesController < ApplicationController
    before_action :require_signed_in!

    def index
        @notes = current_user.notes.each
        render :index
    end

    def create
        @note = Note.new(note_params)
        @note.author_id = current_user.id
        changePositonsOnSave
        if @note.save!
            render :show
        else
            render json: @note.errors.full_messages, status: 400
        end
    end

    def show
        @note = Note.find(params[:id])
    end

    def update
        @note = Note.find(params[:id])
        if @note.update!(note_params)
            render :show
        else
            render json: @note.errors.full_messages, status: 400
        end
    end

    def destroy
        @note = Note.find(params[:id])
        @note.delete
        changePositonsOnDelete(@note.position)
        render :show
    end

    def changePositonsOnDelete(pos)

        sorted_notes = current_user.notes.sort_by {|note| note.position}
        sorted_notes.each do |note|
            note.position -= 1 if note.position > pos
            note.save!
            # note.update_attribute("position", note.position -= 1) 
        end
    end

    def changePositonsOnSave
        sorted_notes = current_user.notes.sort_by {|note| note.position}

        sorted_notes.reverse.each do |note|
            note.position += 1
            note.save!
            # note.update_attribute("position", note.position += 1)
        end
    end

    private
    def note_params
        params.require(:note).permit(:title, :body, :position, :color)
    end
end

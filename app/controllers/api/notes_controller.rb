class Api::NotesController < ApplicationController
    before_action :require_signed_in!

    def index
        @notes = Note.all
        render json: @notes
    end

    def create
        @note = Note.new(note_params)
        if @note.save
            render json: @note
        else
            render json: @note.errors.full_messages, status: 400
        end
    end

    def show
        @note = Note.find(params[:id])
        # debugger
        # render json: @note
    end

    private
    def note_params
        params.require(:note).permit(:title, :body, :position, :color)
    end
end

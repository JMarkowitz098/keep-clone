class Api::NotesController < ApplicationController
    before_action :require_signed_in!

    def index
        @notes = Note.all
        render :index
    end

    def create
        @note = Note.new(note_params)
        @note.author_id = current_user.id
        if @note.save!
            render :show
        else
            render json: @note.errors.full_messages, status: 400
        end
    end

    def show
        @note = Note.find(params[:id])
        render :show
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
        render :index
    end

    private
    def note_params
        params.require(:note).permit(:title, :body, :position, :color)
    end
end

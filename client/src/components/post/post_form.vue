<template>
    <section class="card">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                <li class="nav-createpost">
                    <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Create your post</a>
                </li>
                <li class="nav-image">
                    <a class="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
                </li>
                <li class="nav-video">
                    <a class="nav-link" id="video-tab" data-toggle="tab" role="tab" aria-controls="video" aria-selected="false" href="#video">Video</a>
                </li>
            </ul>
        </div>
    <div class="card-body">
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                <div class="form-group">
                    <label class="sr-only" for="message">post</label>
                        <textarea 
                            v-model="form.content" 
                            class="form-control" 
                            id="message" rows="3" 
                            @input="validateContent"
                            placeholder="what's on your mind?">
                        </textarea>
                    <span v-if="hasError" class="form-error-message">{{error.message}}</span>
                </div>
            </div>
        </div>
        <div class="text-right">
            <select type="button" class="btn btn-outline-dark">
                <option selected>choose..</option>
                <option value="1">Public</option>
                <option value="2">Friends</option>
                <option value="3">Only Me</option>
            </select>
                <button @click="submitPost" type="button" class="btn btn-primary">post</button>
        </div>
    </div>
    </section>
</template>
<script>

export default {
    data() {
    return {
        form: {
            content: '',
            user: ''
        },
        error: {}
    }},
    methods: {
        validateContent() {
            if (this.form.content != "") {
            this.error.message = null
            }
        },
    submitPost() {
        // Validation content
        if (this.form.content == "") {
            this.error.message = "you must write soemthing!"
        }
        // Post content to server
        axios.post('', this.form)
            .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    },
    computed: {
        hasError() {
            if(this.error.message) return true
            return false
        }
    }
}
</script>
<style scoped>
.form-error-message {
    color: red
}

select {
    font-size: 15px;
    border-radius: 50px;
    size: 50px;
    margin: 5px;
}
button {
    font-size: 15px;
    border-radius: 50px;
}
</style>